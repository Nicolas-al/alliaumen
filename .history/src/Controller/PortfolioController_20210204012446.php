<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use App\Repository\CommentsRepository;
use App\Repository\PortfolioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/projets", name="projects")
     */
    public function index(PortfolioRepository $repoPortfolio, CommentsRepository $repoComments, Request $request, EntityManagerInterface $manager)
    {
        
        if ($this->isGranted('ROLE_MODO')){
            return $this->redirectToRoute('app_logout');
         }
        
       
        // on récupère l'IP utilisateur et les IP ban
        $ip = array($_SERVER['REMOTE_ADDR']);
        $ipBan = json_decode(file_get_contents('/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json'), true);

        $comments = $repoComments->findAll();

        return $this->render('portfolio/index.html.twig', [
            'ip' => $ip,
            'ipBan' => $ipBan
        ]);
    }
    
       

}

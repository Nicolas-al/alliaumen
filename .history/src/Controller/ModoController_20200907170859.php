<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Repository\CommentsRepository;
use App\Repository\PortfolioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ModoController extends AbstractController
{
    /**
     * @Route("/modo/{id}", name="modo")
     */
    public function index(Portfolio $portfolio, CommentsRepository $repoComments, EntityManagerInterface $manager)
    {
        // $portfolio = $repo->findAll();
     
         if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
             var_dump('yes');
            
            // $manager->remove($repoComments);
         }

         $comments = $repoComments->findAll();
        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments
        ]);
    }
}
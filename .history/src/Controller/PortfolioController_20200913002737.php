<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use App\Entity\User;
use App\Repository\CommentsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Flex\Path;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/show_project/{id}", name="portfolio")
     */
    public function index(Portfolio $portfolio, CommentsRepository $repoComments, Request $request, EntityManagerInterface $manager)
    {
        $repoUser = $this->getDoctrine()->getRepository(User::class);
        $users = $repoUser->findAll();
      
            var_dump($this->denyAccessUnlessGranted('ROLE_MODO');
        );
          
        //     $this->redirectToRoute('app_logout');
        //     var_dump('wue');

        // }
        
        if (isset($_POST['author']) && isset($_POST['comment'])){
            var_dump($_POST['author']);
            if ($_POST['author'] != "" && $_POST['comment'] != ""){ 
            $comment= new Comments();
            
            $comment->setPortfolio($portfolio);
            $comment->setAuthor($request->request->get('author'));
            $comment->setContent($request->request->get('comment'));
            $comment->setCreatedAt(new \DateTime());

            $manager->persist($comment);
            $manager->flush();
            }
        }
        else{

        }
        // on récupère l'IP utilisateur et les IP ban
        $ip = array($_SERVER['REMOTE_ADDR']);
        $ipBan = json_decode(file_get_contents('/Users/nicolasalliaume/Documents/Code/Local-sites/ProjetsOpenclassroom/Projet5/ip.json'), true);

        $comments = $repoComments->findAll();

        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments,
            'ip' => $ip,
            'ipBan' => $ipBan
        ]);
    }
    
       

}

<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Repository\CommentRepository;
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
    public function index(Portfolio $portfolio, CommentRepository $repoComment, $id)
    {
        // $portfolio = $repo->findAll();
     
         if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
             var_dump('yes');
             $entityManager = $this->getDoctrine()->getManager();
             $comment = $entityManager->getRepository(Comment::class)->find($id);

             
            $comment = $repoComments->findBy($id);
            $manager->remove($comment);
         }

         $comment = $repoComment->findAll();
        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comment' => $comment
        ]);
    }
}

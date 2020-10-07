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
     * @Route("/modo", name="home_modo")
     */
    public function index(PortfolioRepository $repoPortfolio){
        $portfolio = $repoPortfolio->findAll();

        return $this->render('modo/index.html.twig' ,[ 
            'portfolio' => $portfolio
            ]);
    }


    /**
     * @Route("/modo/{id}", name="modo_project")
     */
    public function showProject(Portfolio $portfolio, CommentsRepository $repoComments, $id)
    {
        // $portfolio = $repo->findAll();
     
         if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
            $comment = $repoComments->find($id);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($comment);
            $entityManager->flush();
         }

         $comments = $repoComments->findAll();
        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments
        ]);
    }
}
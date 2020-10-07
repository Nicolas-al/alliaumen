<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Repository\PortfolioRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class ModoController extends AbstractController
{
    /**
     * @Route("/modo/{id}", name="modo")
     */
    public function index(Portfolio $portfolio, CommentsRepository $repoComments)
    {
        // $portfolio = $repo->findAll();
        $comments = $repoComments->findAll();
        
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}

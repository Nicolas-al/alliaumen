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
     * @Route("/modo", name="modo")
     */
    public function index(PortfolioRepository $repo)
    {
        $portfolio = $repo->findAll();
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio,
        ]);
    }
}

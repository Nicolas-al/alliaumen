<?php

namespace App\Controller;

use App\Entity\Comments;
use App\Entity\Portfolio;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommentsController extends AbstractController
{
    /**
     * @Route("/show_project/{id}", name="portfolio")
     */
    public function index(Portfolio $portfolio, Comments $comments, Request $request, EntityManagerInterface $manager)
    {
        if ($request->request->count() > 0){
            $comments= new Comments();
            
            $comments->setPortfolioId($portfolio);
            $comments->setAuthor($request->request->get('author'));
            $comments->setContent($request->request->get('comment'));
            $comments->setCreatedAt(new \DateTime());

            $manager->persist($comments);
            $manager->flush();
        }
        else{
            var_dump('erreur');
        }
        return $this->render('comments/index.html.twig', [
            'portfolio' => $portfolio
        ]);
    }
}

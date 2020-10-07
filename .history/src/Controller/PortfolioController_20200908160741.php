<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Portfolio;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PortfolioController extends AbstractController
{
    /**
     * @Route("/show_project/{id}", name="portfolio")
     */
    public function index(Portfolio $portfolio, CommentRepository $repoComments, Request $request, EntityManagerInterface $manager)
    {
        if ($request->request->count() > 0){
            $comment= new Comment();
            
            $comment->setPortfolio($portfolio);
            $comment->setAuthor($request->request->get('author'));
            $comment->setContent($request->request->get('comment'));
            $comment->setCreatedAt(new \DateTime());



            $manager->persist($comment);
            $manager->flush();
        }
        else{
        }
        $comments = $repoComments->findAll();

        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments
        ]);
    }
}

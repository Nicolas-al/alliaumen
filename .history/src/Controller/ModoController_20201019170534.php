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
    public function showProject(Portfolio $portfolio, CommentsRepository $repoComments)
    {     

        var_dump(array($_SERVER['REMOTE_ADDR']));
        if (isset($_GET["action"]) && $_GET["action"] == "deleteCom"){
        $this->deleteCom();
        };
        $this->banIp();
        $comments = $repoComments->findAll();

        $ip = array($_SERVER['REMOTE_ADDR']);
        $ipBan = json_decode(file_get_contents('ip.json'), true);
        var_dump($ipBan);

        return $this->render('portfolio/index.html.twig', [
            'portfolio' => $portfolio,
            'comments' => $comments,
            'ip' => $ip,
            'ipBan' => $ipBan
        ]);
    }   

    public function deleteCom(){
        
            if (isset($_GET['commentId'])){
                
                $repoComments = $this->getDoctrine()->getRepository(Comments::class);
                $id = $_GET['commentId'];
                $comment = $repoComments->find($id);

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->remove($comment);
                $entityManager->flush();
            }
    }

    Public function banIp()
    {
        if (isset($_GET["action"]) && $_GET["action"] == "ban")
        {
            $ip = array($_SERVER['REMOTE_ADDR']);
            var_dump(array($_SERVER['REMOTE_ADDR']));
            $json = json_encode($ip);
            $bytes = file_put_contents('ip.json', $json);
            $this->deleteCom();

            var_dump($ip);   
        }
    }

    
}

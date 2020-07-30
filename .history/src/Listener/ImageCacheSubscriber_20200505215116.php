<?php

namespace App\Listener;

use App\Entity\Skills;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PreFlushEventArgs;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

class ImageCacheSubscriber implements EventSubscriber
{
    /**
     * @var cacheManager
     */
    private $cacheManager;

    /**
     * @var UploaderHelper
     */
    private $uploaderHelper;

    public function __construct(CacheManager $cacheManager, UploaderHelper $uploaderHelper)
    {
        
    }
    public function getSubscribedEvents()
    {
        return [
            'preRemove',
            'preUpdate'
        ];
    }
    public function preRemove(PreFlushEventArgs $args)
    {
        
    }

    public function preUpdate(PreUpdateEventArgs $args)
    {
        $entity =  $args->getEntity();
        if (!$entity instanceof Skills || instanceof Portolio){
            
        }
    }
}
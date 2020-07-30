<?php

namespace App\Listener;

use App\Entity\Portfolio;
use App\Entity\Skills;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\PreFlushEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
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
        if (!$entity instanceof Skills || !$entity instanceof Portfolio){
            return;
        }
        if ($entity->getImageFile() instanceof UploaderHelper)
        {
            $this->cacheManager->remove($this->uploaderHelper->asset($entity, fields 'imagefile'))
        }
    }
}
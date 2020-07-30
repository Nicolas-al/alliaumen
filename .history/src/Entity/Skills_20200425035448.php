<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillsRepository")
 * @Vich\Uploadable
 */

class Skills
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $logoName;

    /**
     * @Vich\UploadableField(mapping="images-skills", fileNameProperty="image")
     * @var File|null
     */
    private $logoFile;

      /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogoName(): ?string
    {
        return $this->logoName;
    }

    public function setLogoName(string $logoName): self
    {
        $this->logoName = $logoName;

        return $this;
    }
    public function getLogoFile()
    {
        return $this->logoFile;
    }

    public function setLogoFile(File $logoFile = null)
    {
        $this->logoFile = $logoFile;
        if ($logoFile) {
            $this->updatedAt = new \DateTime('now');
        }
    }
    public function __toString(): string
    {
        return 'qqc??';
    }
}

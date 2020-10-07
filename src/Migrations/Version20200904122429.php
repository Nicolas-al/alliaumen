<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200904122429 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A221CB412');
        $this->addSql('DROP INDEX IDX_5F9E962A221CB412 ON comments');
        $this->addSql('ALTER TABLE comments ADD portfolio_id INT DEFAULT NULL, DROP portfolio_id_id');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962AB96B5643 FOREIGN KEY (portfolio_id) REFERENCES portfolio (id)');
        $this->addSql('CREATE INDEX IDX_5F9E962AB96B5643 ON comments (portfolio_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962AB96B5643');
        $this->addSql('DROP INDEX IDX_5F9E962AB96B5643 ON comments');
        $this->addSql('ALTER TABLE comments ADD portfolio_id_id INT NOT NULL, DROP portfolio_id');
        $this->addSql('ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A221CB412 FOREIGN KEY (portfolio_id_id) REFERENCES portfolio (id)');
        $this->addSql('CREATE INDEX IDX_5F9E962A221CB412 ON comments (portfolio_id_id)');
    }
}

provider "aws" {
  region = "us-east-1"
}

variable "db_password" {
  description = "Master password for the RDS instance"
  type        = string
  sensitive   = true
}

resource "aws_security_group" "rds_sg" {
  name        = "shopbox-rds-public-sg"
  description = "Security group for Shopbox RDS - ALLOWS PUBLIC ACCESS"

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # 🛰️ Open to public for Railway & Development
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "shopbox_db" {
  identifier           = "shopbox-db"
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "postgres"
  engine_version         = "16.6"
  instance_class         = "db.t3.micro"
  db_name                = "shopbox"
  username               = "postgres"
  password               = var.db_password
  parameter_group_name   = "default.postgres16"
  skip_final_snapshot    = true
  publicly_accessible    = true 
  vpc_security_group_ids = [aws_security_group.rds_sg.id]

  tags = {
    Name = "shopbox-db"
    Environment = "production"
  }
}

output "db_connection_url" {
  value       = "postgresql://postgres:${var.db_password}@${aws_db_instance.shopbox_db.endpoint}/shopbox?schema=public"
  description = "The database connection URL for Railway/Main.ts"
  sensitive   = true
}

terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Test SQS Queue for CI/CD pipeline validation
resource "aws_sqs_queue" "test_queue" {
  name                      = "test-queue-${formatdate("YYYY-MM-DD-hhmm", timestamp())}"
  delay_seconds             = 0
  max_message_size          = 262144
  message_retention_seconds = 345600
  receive_wait_time_seconds = 0

  tags = {
    Name        = "TestQueue"
    Environment = "test"
    Purpose     = "CI/CD Pipeline Validation"
  }
}

output "queue_url" {
  value       = aws_sqs_queue.test_queue.url
  description = "URL of the test SQS queue"
}

output "queue_arn" {
  value       = aws_sqs_queue.test_queue.arn
  description = "ARN of the test SQS queue"
}

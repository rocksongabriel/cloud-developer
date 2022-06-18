export const config = {
  "dev": {
    "username": "udagram_rds_dev",
    "password": "iamthedarkbotBORNin1999",
    "database": "udagram_rds_dev",
    "host": "udagram-rds-dev-db.cvyae3o2xiyx.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-bucket-gr1999-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
locals {
  bucket_name = "ayushtfbucket18"
  table_name  = "statetable"

  ecr_repo_name = "node-app-ecr-repo"


  demo_app_cluster_name        = "node-app-cluster"
  availability_zones           = ["us-east-1a", "us-east-1b", "us-east-1c"]
  demo_app_task_famliy         = "node-app-task"
  container_port               = 3000
  demo_app_task_name           = "node-app-task"
  ecs_task_execution_role_name = "demo-app-task-execution-role"

  application_load_balancer_name = "node-app-alb"
  target_group_name              = "node-alb-tg"

  demo_app_service_name = "node-app-service"
}

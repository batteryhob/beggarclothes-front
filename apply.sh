#!/bin/bash

#Build
yarn build

#Image Push(docker hub or aws ecr)
docker build -t batteryho/beggarclothes-front:latest .
docker push batteryho/beggarclothes-front:latest

# EKS Deployment Apply
kubectl delete -f beggarclothes-front.yaml
kubectl apply -f beggarclothes-front.yaml
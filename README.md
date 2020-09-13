# beggarclothes-front
2020.10.01 Launching

# deploy process
> yarn serve
> docker build -t batteryho/beggarclothes-front:latest .
> docker push batteryho/beggarclothes-front:latest
> kubectl delete -f beggarclothes-front.yaml
> kubectl apply -f beggarclothes-front.yaml
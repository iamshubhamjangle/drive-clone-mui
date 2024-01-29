## Setting up new yarn nextjs project

```bash
yarn create next-app my-app     # Create new project my-app
yarn install                    # Install all dependencies
yarn dev                        # Run development server
yarn add lodash                 # Add new package
yarn remove lodash              # Remove a package
```

## MUI Installation

```bash
yarn add @mui/material-nextjs @emotion/cache
```

## Docker

```bash
docker build -t drive-clone:0.1
docker run -d -p 3000:3000 drive-clone:0.1
```

## Kubernetes

Create a project repository on dockerhub.

```bash
docker tag drive-clone:0.1 imshubhamj/meow:0.1  # tag your local image with repo name
docker push imshubhamj/meow:0.1                 # push the image to repo
```

Now apply your deployment.yaml

```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl get pods                                # Check if pods are running
kubectl get service -o wide                     # Check if its external service
```

`kubectl delete -f kubernetes/deployment.yaml` # To delete the deployments & pods. Perform this at the end.

Locally, In minikube environment External Service won't be assigned a external IP address automatically.
To assign a host to this service run following command.

```bash
minikube service nextjs-service
```

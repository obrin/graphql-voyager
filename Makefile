.PHONY: build
build:
	pack build jordanyong/graphql-voyager --builder gcr.io/buildpacks/builder:v1
publish:
	docker push jordanyong/graphql-voyager
helm-update:
	helm dependency update charts
release:
	helm upgrade --install graphql-voyager charts
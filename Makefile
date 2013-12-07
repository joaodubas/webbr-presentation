CMD=/usr/bin/docker
NAME=webbrpresentation
ROOT=$(CURDIR)
DEST=/opt/app
SUPERVISOR_DEST=/etc/supervisor/conf.d/program.d/app.conf
IMAGE=joaodubas/nodejs:latest

install:
	@$(CMD) run \
		-i \
		-t \
		-v $(ROOT):$(DEST) \
		-entrypoint npm \
		-w $(DEST) \
		$(IMAGE) \
		install

start:
	@$(CMD) run \
		-i \
		-t \
		-d \
		-v $(ROOT):$(DEST) \
		-v $(ROOT)/supervisor/app.conf:$(SUPERVISOR_DEST) \
		-p 9002:9001 \
		-expose 8080 \
		-p 8080:8080 \
		-p 4022:22 \
		-name $(NAME) \
		$(IMAGE)

stop:
	@$(CMD) kill $(NAME)
	@$(CMD) rm $(NAME)

.PHONY: start stop

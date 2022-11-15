start:
	docker build . -t header-echo
	docker run -it --init --rm -e PORT=3000 -p "3000:3000" header-echo
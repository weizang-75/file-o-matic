.PHONY: all say_hello generate clean

all: say_hello generate

say_hello:
        @echo "OI OI saveloy"

generate:
        @echo "Creating empty text files..."
        touch ./output/file-{1..10}.txt

clean:
        @echo "Cleaning up..."
        rm *.txt
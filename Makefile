# Usage: npx make

# clean:
# 	npx shx rm ./android/app/src/main/res/raw/*

# copy_assets:
# 	npx shx cp ./src/assets/* ./android/app/src/main/res/raw

assets_consts:
	npx node .\tools\make-assets-consts.js

all: assets_consts

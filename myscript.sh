export MY_COOL_NODE_APP=lib

echo enter files path like Documents/openapiyamls
read search_dir


echo enter zip file name
read zipname

echo enter where the zip to be
read zippath


 FILE_PATH="kaanathas"

for entry in "$HOME/$search_dir"/*
do

 FILE_PATH=$entry

done
node $MY_COOL_NODE_APP/index.js $FILE_PATH $zipname $HOME/$zippath






#  echo $entry
# file $entry
# curl -F "myapi=@$entry;type=text/yaml" https://aqueous-retreat-41952.herokuapp.com/uploadopenapi







# curl https://aqueous-retreat-41952.herokuapp.com/downloadDocument -o $myfile.zip

# echo $FILE_PATH




# for entry in "$HOME/$search_dir"/*
# do
# file $entry
# curl -F "myapi=@$entry;type=text/yaml" https://aqueous-retreat-41952.herokuapp.com/uploadopenapi
# done

# curl https://aqueous-retreat-41952.herokuapp.com/downloadDocument -o $myfile.zip


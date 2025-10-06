#!/bin/bash

read -p "enter your commit msg: " commit_message

# something was entered?

if [ -z "$commit_message" ]; then
    echo "no commit detected"
    exit 1
fi


git add .
git commit -m "$commit_message"
git push


read -p "done, press enter to close"

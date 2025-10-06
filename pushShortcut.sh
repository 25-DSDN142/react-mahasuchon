#!/bin/bash

# Ask for the commit message
read -p "Enter your commit message: " commit_message

# Make sure something was entered
if [ -z "$commit_message" ]; then
    echo "No commit message entered. Exiting."
    exit 1
fi

# Run git commands
git add .
git commit -m "$commit_message"
git push

# Pause so you can see the output before the terminal closes
read -p "Press Enter to close..."

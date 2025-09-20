# ops310
1. Project Overview
This project simulates a simple modern application using the low-code and Platform as a Service (PaaS) features of Microsoft Azure. The goal is to create an automated, end-to-end workflow for file processing. Users upload raw files to an Azure Storage Account, and the system automatically picks up, processes, and moves the files to a separate folder. Once the process is complete, an email notification is sent to the appropriate staff.

This project was completed as part of the Seneca OPS310 course.

2. Technologies Used
Azure Storage: Used to create a storage account with two containers, one for incoming files and one for processed files.

Azure Logic Apps: The core of the automation workflow. It is configured to automatically detect new files, process them, and move them to a new container. It also handles sending a status update email.

Azure Static Web Apps (Optional): An optional component to create a front-end website for users to upload files without directly interacting with the backend storage account.

GitHub (Optional): Used in the optional section for continuous deployment of the static web app.

3. Architecture
Step 1: A storage account is created with two containers: incoming-files and processed-files.

Step 2: An Azure Logic App is created with a trigger for changes in the storage account. It processes the new file, moves it to the processed-files container, and sends an email notification to the user.

Step 3 (Optional): An Azure Static Web App is deployed from GitHub to act as a user-friendly front end for uploading files.

Step 4: The user receives an email confirming that the file has been successfully processed.

4. Project Components
1 x Resource Group (OPS310-Prj2-RG)

1 x Azure Storage Account (ops310prj2studentaccount)

1 x Azure Logic App (ops310prj2LogicApp)

1 x Azure Static Web App (Optional)

1 x GitHub Account (Optional)

5. Key Steps & Configuration
Resource Group: A resource group named OPS310-Prj2-RG was created to logically contain all project resources.

Storage Account:

A storage account named ops310prj2studentaccount was created with two containers: incoming-files and processed-files.

Anonymous access was enabled for individual containers to allow user uploads.

CORS rules were configured to enable resource sharing between the optional web app and the storage account.

Logic App:

A Logic App was created with a Multi-tenant Consumption plan.

The workflow was designed to trigger when a blob is added to the incoming-files container.

The Logic App processes the file by adding the word "processed" to the end of the file name.

It then moves the processed file to the processed-files container and deletes the original file from the incoming-files container.

Finally, a notification email is sent to my personal email address to confirm successful completion.

6. Demonstrations
The project's successful functionality was demonstrated by uploading a file to the storage account and showcasing the final results:

The original file was processed and moved to the processed-files container.

The incoming-files container was empty.

A new email was received, confirming that the file processing was complete.



document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    try {
      document.getElementById('status').innerText = 'Uploading...';

      // Fetch the SAS URL for uploading (you can use a backend or function to generate SAS URL)
      const sasUrl = await getSasUrlForUpload(file.name);

      // Upload file to Azure Blob Storage using the SAS URL
      await uploadFileToBlob(sasUrl, file);

      document.getElementById('status').innerText = 'File uploaded successfully!';
    } catch (error) {
      console.error(error);
      document.getElementById('status').innerText = 'File upload failed.';
    }
  }
});

// Function to get SAS URL for uploading file
async function getSasUrlForUpload(fileName) {
  const response = await fetch('/getSasUrl', { // Assume you have a backend or API to provide SAS URLs
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fileName }),
  });

  const data = await response.json();
  return data.sasUrl;
}

// Function to upload file to Azure Blob Storage using the SAS URL
async function uploadFileToBlob(sasUrl, file) {
  const response = await fetch(sasUrl, {
    method: 'PUT',
    headers: {
      'x-ms-blob-type': 'BlockBlob',
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }
}

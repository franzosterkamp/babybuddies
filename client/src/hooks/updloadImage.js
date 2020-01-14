export default function uploadImage(image) {
  return new Promise(resolve => {
    const formData = new FormData();
    const createDate = Date.now();
    const xhr = new XMLHttpRequest();
    const url = `https://api.cloudinary.com/v1_1/befamily/upload`;
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    formData.append('upload_preset', 'nd1vsnsz');
    formData.append('file', image, createDate);
    formData.append('name', createDate);
    formData.append('public_id,', createDate);
    xhr.send(formData);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const url = response.secure_url;
        resolve(url);
      }
    };
  });
}

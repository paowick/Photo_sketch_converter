// Get the input element and the preview element
const input = document.getElementById('.photo');
const preview = document.getElementById('preview');

// Listen for changes to the input element
input.addEventListener('change', function () {  // bug here
    // If a file is selected
    if (input.files && input.files[0]) {
        // Create a FileReader object
        const reader = new FileReader();

        // When the file is loaded
        reader.addEventListener('load', function () {
            // Set the preview image source to the loaded data URL
            preview.src = reader.result;
        });

        // Read the file as a data URL
        reader.readAsDataURL(input.files[0]);
    }
});

    document.querySelectorAll('.download-button').forEach(button => {
        button.addEventListener('click', function() {
            const imgUrl = this.getAttribute('data-img-url');
            const link = document.createElement('a');
            link.href = imgUrl;
            link.download = imgUrl.substring(imgUrl.lastIndexOf('/') + 1);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });


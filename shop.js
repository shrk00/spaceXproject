

      document.querySelector('.search').addEventListener('click', function(e) {
        e.preventDefault();
        const searchBox = document.querySelector('.box');
        if (searchBox.style.display === 'block') {
            searchBox.style.display = 'none';
        } else {
            searchBox.style.display = 'block';
        }
    });


    document.querySelector('.close-icon').addEventListener('click', function(e) {
        document.querySelector('.box').style.display = 'none';
    });

    document.addEventListener('click', function(e) {
        const searchBox = document.querySelector('.box');
        const searchIcon = document.querySelector('.search');
        const closeIcon = document.querySelector('.close-icon');
        if (!searchBox.contains(e.target) && !searchIcon.contains(e.target) && !closeIcon.contains(e.target)) {
            searchBox.style.display = 'none';
        }
    });

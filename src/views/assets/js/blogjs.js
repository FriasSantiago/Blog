$(document).ready(() => {

    $('#post-form').submit(function(e){
        if($('.post-content').val().length < 10 || $('.post-content').val().length > 400){
            e.preventDefault();
            $('.condition').removeClass('text-muted');
            $('.condition').addClass('error-small');
            $('.post-content').addClass('error-content');
        }
    });

    let postCount = 5;
    let skipCount = 0;
    let postAmount = 0;

    $(".show-more").on("click", () => {
        loadPosts();
    });

    const loadPosts = () => {
        $.ajax({
            url: "/load-posts",
            method: "GET",
            data: { postCount: postCount, skipCount: skipCount },
            dataType: 'json',
            success: function(data, status) {
                postAmount += data.currentLength;
                $(".posts-count").html(postAmount);
                for (var i = 0; i < data.postsList.length; i++) {
                    $(".posts-area").append('<div id="main-card" class="card"><div class="card-body"><h4 class="card-title">' + data.postsList[i].uid + '</h4><h6 class="card-subtitle mb-2 text-muted">' + data.postsList[i].date + '</h6><hr><p id="card-data" class="card-text">' + data.postsList[i].data + '</p></div></div>');
                }
                if(postCount > data.postsList.length) {
                    $(".show-more").hide();
                }
            }
        });
        skipCount += postCount;
    }

    loadPosts();


})


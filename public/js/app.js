const PostForm = () => $('#post-form').empty().append(`
  <hr class="mb-16">
  <form
    class="flex direction-column mb-16"
    id="form"
  >
    <input
      class="mb-16"
      id="title"
      name="title"
      placeholder="Post title"
      type="text"
    />
    <textarea
      class="mb-16"
      id="text"
      name="text"
      placeholder="Post text"
    ></textarea>
    <button
      class="noselect"
      id="form-button"
      type="submit"
    >
      ADD POST
    </button>
    <div
      class="error text-center"
      id="form-error"
    ></div>
  </form>
`);

const Index = async () => {
  $('#app').empty().append(`
    <div class="flex direction-column page-wrap">
      <h1 class="header text-center mb-16 noselect">
        A SIMPLE GRPC DEMO
      </h1>
      <div
        class="flex direction-column items"
        id="posts"
      ></div>
      <div id="post-form"></div>
    </div>
    <div class="flex justify-content-center align-items-center footer noselect">
      <div>
        By <a href="https://github.com/peterdee">Peter Dyumin</a>, 2020
      </div>
    </div>
  `);

  try {
    $('#posts').append(`
      <div class="flex justify-content-center noselect">
        <div class="lds-hourglass"></div>
      </div>
    `);
    
    const { data } = await $.ajax({
      method: 'GET',
      url: '/api/posts',
    });
    if (!(data && data.posts)) {
      return $('#posts').empty().append(`
        <div class="error text-center">
          Error loading the posts!
        </div>
      `);
    }

    $('#posts').empty();
    PostForm();

    if (data.posts.length === 0) {
      $('#posts').append(`
        <div class="text-center">
          Posts not found!
        </div>
      `);
    }

    data.posts.map((post) => $('#posts').append(`
      <div
        class="flex direction-column mb-16"
        id="${post._id}"
      >
        <h2>${post.title}</h2>
        <div>${post.text}</div>
        <div class="fs-12">
          Added on ${new Date(Number(post.created))}
        </div>
      </div>
    `));

    $('#form').on('submit', async (event) => {
      event.preventDefault();

      const text = $('#text').val();
      const title = $('#title').val();
      if (!(text && text.trim() && title && title.trim())) {
        return false;
      }

      $('#form-button').attr('disabled', true);
      $('#text').attr('disabled', true);
      $('#title').attr('disabled', true);

      try {
        await $.ajax({
          data: {
            text: text.trim(),
            title: title.trim(),
          },
          method: 'POST',
          url: '/api/posts',
        });
        
        return window.location.reload();
      } catch {
        $('#form-button').attr('disabled', false);
        $('#text').attr('disabled', false);
        $('#title').attr('disabled', false);
        return $('#form-error').empty().append(`
          <div class="error text-center">
            Error loading the posts!
          </div>
        `);
      }
    });
  } catch {
    return $('#posts').empty().append(`
      <div class="error text-center">
        Error loading the posts!
      </div>
    `);
  }
};

$(document).ready(() => Index());

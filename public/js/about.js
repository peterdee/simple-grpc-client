const About = () => {
  $('#modal').empty().append(`
    <div
      id="modal-background"
      class="modal-background"
    ></div>
    <div class="flex direction-column modal-page noselect">
      <h2 class="text-center mb-16">About</h2>
      <div class="flex direction-column">
        <div class="mb-16">
          This application demonstrates a simple gRPC microservice in action.
        </div>
        <div>
          How it works:
        </div>
        <div>
          - Posts are being loaded and posted via the REST API.
        </div>
        <div class="mb-16">
          - REST API handles the gRPC connection and loads the data from the gRPC microservice (or sends the data to it).
        </div>
        <div>
          Client repository:
        </div>
        <div class="mb-16">
          <a href="https://github.com/peterdee/simple-grpc-client">
            https://github.com/peterdee/simple-grpc-client
          </a>
        </div>
        <div>
          Server repository:
        </div>
        <div class="mb-16">
          <a href="https://github.com/peterdee/simple-grpc-server">
            https://github.com/peterdee/simple-grpc-server
          </a>
        </div>
        <div>
          Some limitations are applied to the posting and to the REST APIs:
        </div>
        <div>
          - Only 100 API calls per 10 minutes are allowed.
        </div>
        <div class="mb-16">
          - Only the last 10 posts are stored in the database.
        </div>
      </div>
      <button
        id="close-modal"
        type="button"
      >
        CLOSE
      </button>
    </div>
  `);

  $('#modal-background').on('click', () => $('#modal').empty());
  $('#close-modal').on('click', () => $('#modal').empty());
};

function App() {
  return (
    <div className="App">
      <div>
        <div class="comments">
          <h2>Comments (2)</h2>
          <div class="parent-comment">
            <div class="comment">
              <hr />
              <div class="image">
                <img src="/images/no-user-image.gif" alt="" />
              </div>
              <div class="header">
                <h3 class="author">Louisa Leuschke</h3>
                <span>2 hours ago</span>
              </div>
              <p>Odit eligendi quasi deleniti ipsa cumque iusto ullam.</p>
            </div>
            <div class="replies">
              <div class="comment">
                <hr />
                <div class="image">
                  <img src="/images/no-user-image.gif" alt="" />
                </div>
                <div class="header">
                  <h3 class="author">Cydney Robel</h3>
                  <span>2 hours ago</span>
                </div>
                <p>
                  Ratione quibusdam sed doloremque expedita fugit similique et
                  aut.
                </p>
              </div>
              <a href="#" class="show_more">
                Show More Replies (2)
              </a>
            </div>
          </div>
          <div class="parent-comment">
            <div class="comment">
              <hr />
              <div class="image">
                <img src="/images/no-user-image.gif" alt="" />
              </div>
              <div class="header">
                <h3 class="author">Rahul Fisher</h3>
                <span>1 hour ago</span>
              </div>
              <p>
                Et esse possimus temporibus. Repudiandae omnis error ab magnam
                repudiandae maxime aspernatur consequatur. Possimus qui id non
                esse illo ad. Temporibus sit blanditiis recusandae sunt rerum
                eos voluptatem ducimus ullam. Cupiditate asperiores facere
                magnam explicabo voluptatem dolores et. Numquam ex aspernatur
                assumenda nihil sequi optio quis.
              </p>
            </div>
            <div class="replies">
              <div class="comment">
                <hr />
                <div class="image">
                  <img src="/images/no-user-image.gif" alt="" />
                </div>
                <div class="header">
                  <h3 class="author">Bernice Kautzer</h3>
                  <span>2 hours ago</span>
                </div>
                <p>
                  Ratione quibusdam sed doloremque expedita fugit similique et
                  aut.
                </p>
              </div>
              <div class="comment">
                <hr />
                <div class="image">
                  <img src="/images/no-user-image.gif" alt="" />
                </div>
                <div class="header">
                  <h3 class="author">Bernice Kautzer</h3>
                  <span>2 hours ago</span>
                </div>
                <p>
                  Ratione quibusdam sed doloremque expedita fugit similique et
                  aut.
                </p>
              </div>
              <div class="comment">
                <hr />
                <div class="image">
                  <img src="/images/no-user-image.gif" alt="" />
                </div>
                <div class="header">
                  <h3 class="author">Bernice Kautzer</h3>
                  <span>2 hours ago</span>
                </div>
                <p>
                  Ratione quibusdam sed doloremque expedita fugit similique et
                  aut.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form action="">
          <h2>Post a Comment</h2>
          <div class="input-group">
            <label>Your Name</label>
            <input type="text" name="author" value="" />
          </div>

          <div class="input-group">
            <label>Your Comment</label>
            <textarea name="body" value="" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

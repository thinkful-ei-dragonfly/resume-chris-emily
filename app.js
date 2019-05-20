'use strict';



function App(props) {
  return (
    <div>
    <header>
      {props.children}
    </header>

    <main>
      <section>
        <address>
          <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" />
          <p>Name: {props.name}</p>
          <p>email: sallystudent@gmail.com</p>
          <p>Address: 123 random st, denver, CO 903939</p>
        </address>
      </section>

      <section>
        <h2>Employment History</h2>
        <ul>
          <li>
            <p>Random place</p>
            <p>engineer</p>
            <p>2010 - present</p>
            <p> random things</p>
          </li>
          <li>
            <p>Random other place</p>
            <p>engineer</p>
            <p>2003 - 2010</p>
            <p> other random things</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <p></p>
            <p>bachelors of blabla</p>
            <p>1993 - 1998 </p>
            <p>GPA: 2.78</p>
          </li>
        </ul>
      </section>
    </main>
  </div>


  );
}

App.defaultProps = {
    name: 'Resume'
}

ReactDOM.render(
  <App name="Sally Student">
    <header> Sally Student</header>
  </App>,

  document.querySelector('#application-root')
);


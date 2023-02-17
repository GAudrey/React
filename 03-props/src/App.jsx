import React from 'react';
import User from './components/User';

const App = () => {
  const user = {
    name: 'Varoh',
    age: 35,
    comment: {
      lastComment: 'Vive les tractopelles !',
    },
  };

  const users = [
    {
      id: 1,
      name: 'Connor',
      age: 665,
      comment: {
        lastComment: 'Blood is blood.',
      },
    },
    {
      id: 2,
      name: 'Ivory',
      age: 24,
      comment: {
        lastComment: 'Seriously, Seth?',
      },
    },
    {
      id: 3,
      name: 'Gabrielle',
      age: 38,
      comment: {
        lastComment: 'FFS',
      },
    },
  ];

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <header>
        <div>
          <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
        </div>
      </header>
      <main>
        <div className="sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96 p-8">
              <User name={user.name} age={user.age} bisou={user.comment.lastComment} />
              {users.map((u) => (
                <User
                  key={u.id}
                  name={u.name}
                  age={u.age}
                  bisou={u.comment.lastComment}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

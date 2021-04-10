import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import { HeaderStyles } from '../components/HeaderStyles'
import { CommitStyles } from './CommitStyles'

function Commits() {
  return (
    <CommitStyles>
      <HeaderStyles style={{ background: '#EFF2F6', marginBottom: '32px' }}>
        <nav className="container">
          <h1>
            <Link to="/">Commit Viewer</Link>
          </h1>
          <SearchInput />
        </nav>
      </HeaderStyles>

      <div className="container">
        <h3>microsoft/vscode</h3>

        <ul className="results">
          <li>
            <span className="loading">Loading...</span>
          </li>

          <li>
            <div>
              <figure>
                <img src alt="avatar" />
                <figcaption>gaearon</figcaption>
              </figure>

              <p>Log all error to console.error by default (#21130)</p>
            </div>

            <p>23:30 28/04/2021</p>
          </li>
        </ul>
      </div>
    </CommitStyles>
  )
}

export default Commits

# Expo CLI `expo start` throws vague Metro Bundler error

This repository demonstrates a bug where the Expo CLI command `expo start` throws a vague error related to the Metro bundler. The error message is not helpful in diagnosing the root cause. The project is a simple React Native app with minimal dependencies, making it easier to reproduce the issue.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo start`.
4. Observe the vague Metro Bundler error.

## Solution

The solution involves clearing the cache of the Metro bundler.  This can often resolve issues related to cached dependencies or corrupted state.

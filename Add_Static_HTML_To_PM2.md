# Serving Static HTML Pages with PM2: A Comprehensive Guide

PM2 is a powerful process manager for Node.js applications that can also be used to serve static websites with ease. This guide provides a comprehensive refresher on how to add and manage a static HTML page on your server using PM2.

## Prerequisites

Before you begin, ensure you have the following installed on your server:

*   **Node.js and npm:** PM2 is a Node.js module, so you need Node.js and its package manager, npm, installed.
*   **PM2:** Install PM2 globally using npm:

    ```bash
    sudo npm install pm2 -g
    ```

## Method 1: Using the `pm2 serve` Command

The quickest way to serve a static site is by using the `pm2 serve` command. This command allows you to serve files from a specified directory over HTTP. [1]

### Basic Usage

The basic syntax for the `pm2 serve` command is:

```bash
pm2 serve <path> <port>
```

*   `<path>`: The directory containing your static files. If omitted, it defaults to the current directory.
*   `<port>`: The port on which to serve the files. The default is 8080.

For example, to serve files from a directory named `/var/www/my-site` on port 3000, you would use:

```bash
pm2 serve /var/www/my-site 3000
```

You can also assign a name to the process for easier management:

```bash
pm2 serve /var/www/my-site 3000 --name my-static-site
```

### Serving a Single Page Application (SPA)

For Single Page Applications (like those built with React, Vue, or Angular), you need to redirect all requests to your `index.html` file. You can do this with the `--spa` flag: [2]

```bash
pm2 serve build/ 3000 --spa --name my-spa
```

### Basic Authentication

You can protect your static site with basic authentication using the `--basic-auth-username` and `--basic-auth-password` flags: [1]

```bash
pm2 serve . 8080 --basic-auth-username myuser --basic-auth-password mypassword
```

## Method 2: Using an `ecosystem.config.js` File

For more complex configurations or managing multiple applications, it is highly recommended to use an `ecosystem.config.js` file. This file allows you to declare all your application settings in one place. [3]

### Generating the Configuration File

To create a sample `ecosystem.config.js` file, run:

```bash
pm2 init simple
```

### Configuring for a Static Site

To configure PM2 to serve a static site, you need to set the `script` to `"serve"` and use environment variables to specify the path and port. [1]

Here is an example `ecosystem.config.js` file for serving a static site:

```javascript
module.exports = {
  apps: [{
    name: "my-static-site",
    script: "serve",
    env: {
      PM2_SERVE_PATH: ".",
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: "true",
      PM2_SERVE_HOMEPAGE: "./index.html"
    }
  }]
};
```

### Managing Applications with the Ecosystem File

Once your configuration file is set up, you can manage your application with the following commands:

| Command                                   | Description                                      |
| ----------------------------------------- | ------------------------------------------------ |
| `pm2 start ecosystem.config.js`           | Start all applications defined in the file.      |
| `pm2 stop ecosystem.config.js`            | Stop all applications.                           |
| `pm2 restart ecosystem.config.js`         | Restart all applications.                        |
| `pm2 delete ecosystem.config.js`          | Stop and remove all applications from the list.  |
| `pm2 start ecosystem.config.js --only my-static-site` | Start only a specific application. |

## Process Management

PM2 provides several commands to manage your running processes. [4]

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `pm2 list` or `pm2 ls` | List all running processes.                       |
| `pm2 restart <name|id>` | Restart a specific process.                       |
| `pm2 stop <name|id>`    | Stop a specific process.                          |
| `pm2 delete <name|id>`  | Stop and remove a process from the PM2 list.      |
| `pm2 monit`       | Monitor CPU and memory usage of all processes.    |
| `pm2 logs <name|id>`    | View the logs for a specific process.             |

## Making PM2 Persistent

To ensure your applications restart automatically after a server reboot, you need to generate and configure a startup script. [5]

1.  **Generate the startup script:**

    ```bash
    pm2 startup
    ```

    This command will detect your init system and provide you with a command to run. Copy and paste the provided command and execute it.

2.  **Save the current process list:**

    ```bash
    pm2 save
    ```

    This will save the list of currently running processes, which will be restored on server boot.

## Conclusion

PM2 offers a simple and effective way to serve and manage static HTML pages on your server. Whether you use the straightforward `pm2 serve` command for quick deployments or the more flexible `ecosystem.config.js` file for advanced configurations, PM2 provides the tools you need to keep your static sites online and running smoothly.

## References

[1] PM2. (n.d.). *Expose static file over http*. Retrieved from https://pm2.keymetrics.io/docs/usage/expose/
[2] ServerOK. (n.d.). *How to host static site using pm2*. Retrieved from https://serverok.in/how-to-serve-static-site-using-pm2
[3] PM2. (n.d.). *Ecosystem File*. Retrieved from https://pm2.keymetrics.io/docs/usage/application-declaration/
[4] PM2. (n.d.). *Process Management*. Retrieved from https://pm2.keymetrics.io/docs/usage/process-management/
[5] PM2. (n.d.). *Startup Script*. Retrieved from https://pm2.keymetrics.io/docs/usage/startup/

# ISOJ Hackathon: Team Rex

This repo contains the build system for a demonstration page, which was created by a four-person team at the Hackastory hackathon at ISOJ 2017 (a symposium organized by the University of Texas at Austin).

The page this system builds primarily demonstrates our team's concept for increasing transparency in the news reporting process. All text used on this page is intended solely for the purposes of demonstrating this concept.

This concept was voted to have the "Best potential" by the members of all the teams that participated in this hackathon.

More information on this project may be added here in the coming days. Otherwise, reach out to the team members who created it -- our names and email addresses are listed at the very bottom of the page.


## Installation

You'll need to have `node.js`, `npm`, `imageMagick` and `gulp-cli` installed on your system before running this build toolkit.

Once you're sure you have those tools and have cloned this repo, open a Terminal window to the folder where it's cloned and run the following command:

`npm install`

As NPM installs all the dependencies for this project, create a file named `aws.json` in this folder. Fill that file with the following contents:

```
{
  "accessKeyId": "",
  "secretAccessKey": "",
  "params": {
    "Bucket": ""
  }
}
```

**Note:** You can replace these blank strings with your own AWS credentials if you want to publish to your own S3 server. This isn't required to run the build system locally, so unless you really know what you're doing and don't mind changing some of the folder structure that's hard-coded in the `gulp` deployment task, skip this step for now.


## Running/editing

After these two steps are done, run the `gulp` command in your Terminal window (again, still in the folder to which you've cloned this repo). A process should start, and it should open a browser window to your developmental version of this page.

Once that has happened, you can edit any of the CSS, JS, AML or HTML files in the `./src/` directory and see your changes reflected live on the development web site when you save your changes to the files. If something goes wrong with the Gulp process, you can try starting it again or reverting to the last version of your files that worked properly. To quit the Gulp terminal process at any time, type `ctrl-c` with the Terminal active.


## Additional questions?

For additional technical information, contact Allan James Vestal (@allanjamesvestal) or Chris Essig (@csessig86) with questions.

Contact information for all four team members is available on the website for any conceptual questions you might have.

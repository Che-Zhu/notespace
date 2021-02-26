(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[e._v("#")]),e._v(" Shell")]),e._v(" "),s("h2",{attrs:{id:"using-the-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-shell"}},[e._v("#")]),e._v(" Using the shell")]),e._v(" "),s("p",[e._v("The terminal "),s("em",[e._v("prompt")]),e._v("  often looks like this:")]),e._v(" "),s("p",[s("code",[e._v("che@che-ubuntu:~/Desktop$")])]),e._v(" "),s("p",[e._v("It tells you where you currently are, which is "),s("code",[e._v("~")]),e._v(' (short for "home"). The '),s("code",[e._v("$")]),e._v(" tells you that you are not the root user, and "),s("code",[e._v("#")]),e._v(" indicates you are the root user.")]),e._v(" "),s("p",[e._v("We can switch to root user by using the command "),s("code",[e._v("sudo su")]),e._v(', it lets you "do" something "as su: (short for "super user", or "root").')]),e._v(" "),s("p",[e._v("and command "),s("code",[e._v("exit")]),e._v(" can be used to quit root privilige.")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Suppose we have a file "),s("code",[e._v("brightness")]),e._v(" that need to be in "),s("code",[e._v("root")]),e._v(" in order to do writing, you may think the following code will work but it will not:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" brightness\nAn error occurred "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" redirecting "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'brightness'")]),e._v("\nopen: Permission denied\n")])])]),s("p",[e._v("The correct code should be:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" brightness\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("In this case, the "),s("em",[e._v("shell")]),e._v(" is authenticated as user and tries to open the brightness file for writing before setting that as "),s("code",[e._v("sudo echo")]),e._v("'s output, but is prevented from doing so since the shell does not run as "),s("code",[e._v("root")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Important to know")]),e._v(" "),s("p",[e._v("Operations like "),s("code",[e._v("|")]),e._v(", "),s("code",[e._v(">")]),e._v(" and "),s("code",[e._v("<")]),e._v(" are done by the shell, not by the individual program. These individual programs just read from their input and write to their output, whatever it may be")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("We can execute a command with "),s("em",[e._v("arguments")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" hello\nhello\n")])])]),s("p",[e._v("The shell parses the command by splitting it by whitespace, and then runs the program indicated by the first word, supplying each subsequent word as an argument that the program can access.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v('If you want to provide an argument that contains spaces or other special characters (e.g. a directory named "My Photos"), you can either quote the argument with '),s("code",[e._v("'")]),e._v(" or "),s("code",[e._v('"')]),e._v(" ("),s("code",[e._v('"My Photos"')]),e._v("), or escape just the relevant characters with "),s("code",[e._v("\\")]),e._v(" ("),s("code",[e._v("My\\ Photos")]),e._v(").")])]),e._v(" "),s("p",[e._v("If a shell is asked to execute a command that doesn't match one of its programming keywords, it consults an enviroment variable called "),s("code",[e._v("$PATH")]),e._v(" that lists which directories the shell should search for programs when it is given a command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:~$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v("\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin\nche@che-ubuntu:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v("\n/usr/bin/echo\nche@che-ubuntu:~$ /usr/bin/echo "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v("\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("When we run the "),s("code",[e._v("echo")]),e._v(" command, the shell sees that it should execute the program "),s("code",[e._v("echo")]),e._v(", and the searches through the "),s("code",[e._v(":")]),e._v(" separated list of directiries in "),s("code",[e._v("$PATH")]),e._v(" for a file by that name. When it finds it, it runs it. We can find out which file is executed for a given program name using the "),s("code",[e._v("which")]),e._v(" program. We can also bypass "),s("code",[e._v("$PATH")]),e._v(" entirely by giving the "),s("em",[e._v("path")]),e._v(" to the file we want to execute.")])]),e._v(" "),s("h2",{attrs:{id:"navigating-in-the-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigating-in-the-shell"}},[e._v("#")]),e._v(" Navigating in the shell")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("A path that starts with "),s("code",[e._v("/")]),e._v(" is called an "),s("em",[e._v("absolute")]),e._v(" path. Any other path is a "),s("em",[e._v("relative")]),e._v(" path. Relative paths are relative to the current working directory, which we can see with the "),s("code",[e._v("pwd")]),e._v(" command and change with the "),s("code",[e._v("cd")]),e._v(" command. In a path, "),s("code",[e._v(".")]),e._v(" referes to the current directory, and "),s("code",[e._v("..")]),e._v(" to its parent directory.")])]),e._v(" "),s("h3",{attrs:{id:"ls-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls-command"}},[e._v("#")]),e._v(" ls command")]),e._v(" "),s("p",[e._v("Unless a directory is given as its first argument, "),s("code",[e._v("ls")]),e._v(" will print the contents of the current directory.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:~/Desktop/codespace$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("464")]),e._v("\n-rw-rw-r--   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("137")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":13 deploy.sh\ndrwxrwxr-x   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" che che   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":48 docs\ndrwxrwxr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("801")]),e._v(" che che  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32768")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":53 node_modules\n-rw-rw-r--   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("578")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":51 package.json\n-rw-rw-r--   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("427564")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":51 package-lock.json\n")])])]),s("p",[e._v("The above output gives us a bunch more information about each file or directory present. The "),s("code",[e._v("d")]),e._v(" at the beginning of the second line tells us that "),s("code",[e._v("docs")]),e._v(" is a directory.")]),e._v(" "),s("p",[e._v("The follow three groups of three characters ("),s("code",[e._v("rwx")]),e._v(") indicate what permissions the owner of the file (first "),s("code",[e._v("che")]),e._v("), the owning group (second "),s("code",[e._v("che")]),e._v("), and everyone else respectively have on the relevant item. A "),s("code",[e._v("-")]),e._v(" indicates that the given principal does not have the given permission.")]),e._v(" "),s("h2",{attrs:{id:"connecting-programs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connecting-programs"}},[e._v("#")]),e._v(" Connecting programs")]),e._v(" "),s("p",[e._v('In the shell, programs have two primary "streams" associated with them: their input steam and their output stream.')]),e._v(" "),s("p",[e._v("The simplest form of redirection is "),s("code",[e._v("< file")]),e._v(" and "),s("code",[e._v("> file")]),e._v(". These let you rewire the input and output steams of a program to a file respectively:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" hello "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" hello.txt\nche@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" hello.txt \nhello\nche@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" hello.txt \nhello\nche@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" hello.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" hello2.txt\nche@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" hello2.txt \nhello\n")])])]),s("p",[e._v("In the second last command, the content of "),s("code",[e._v("hello.txt")]),e._v(" is first passed to "),s("code",[e._v("cat")]),e._v(", and then pushed to "),s("code",[e._v("hello2.txt")]),e._v(".")]),e._v(" "),s("p",[e._v("You can alos use "),s("code",[e._v(">>")]),e._v(" to append to a file. Where this kind of input/output redirection really shines is in the use of "),s("em",[e._v("pipes")]),e._v(". The "),s("code",[e._v("|")]),e._v(' operator lets you "chain" programs such that the output of one is the input of another:')]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("43876")]),e._v("\ndrwxrwxr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" che che     "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4096")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":51 codespace\n-rwxrwxr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("44922808")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" 01:11 Panda5.0.3.AppImage\nche@che-ubuntu:~/Desktop$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" -n1\n-rwxrwxr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("44922808")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" 01:11 Panda5.0.3.AppImage\n")])])]),s("h2",{attrs:{id:"exercises-answers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercises-answers"}},[e._v("#")]),e._v(" Exercises answers")]),e._v(" "),s("ol",[s("li",[e._v("Making sure we are running an appropriate shell")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$SHELL")]),e._v("\n/bin/bash\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Create a new directory called "),s("code",[e._v("missing")]),e._v(" under "),s("code",[e._v("/tmp")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" missing\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[e._v("Look up the "),s("code",[e._v("touch")]),e._v(" program ("),s("code",[e._v("man touch")]),e._v(")")])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("touch")]),e._v(" to create a new file called "),s("code",[e._v("semester")]),e._v(" in "),s("code",[e._v("missing")])])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/tmp$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" missing/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" semester\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[e._v("Write the following into that file, one at a time:")])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("DETAILS")]),e._v(" "),s("p",[e._v("#!/bin/sh\ncurl --head --silent https://missing.csail.mit.edu")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#!/bin/sh'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" semester\nche@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'curl --head --silent https://missing.csail.mit.edu'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" semester\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[s("code",[e._v("#")]),e._v(" starts a comment in Bash, and "),s("code",[e._v("!")]),e._v(" has a special meaning even within double-quoted strings. Bash treats single-quoted strings ("),s("code",[e._v("'")]),e._v(") differently: "),s("a",{attrs:{href:"https://www.gnu.org/software/bash/manual/html_node/Quoting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bash quoting"),s("OutboundLink")],1)])]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[e._v("Try to execute the file by using script "),s("code",[e._v("./semester")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#!/bin/sh'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" semester\nche@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'curl --head --silent https://missing.csail.mit.edu'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" semester\nche@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n-rw-rw-r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" che che "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("61")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("月  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(":44 semester\n\n")])])]),s("p",[e._v("It does not work because we are trying to execute this file without "),s("code",[e._v("x")]),e._v(" (execute) permission, and the user "),s("code",[e._v("che")]),e._v(" have only "),s("code",[e._v("r")]),e._v(" (read) and "),s("code",[e._v("w")]),e._v(" (write) permissions according to "),s("code",[e._v("ls -l")]),e._v(" command output.")]),e._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[e._v("Run the command by explicitly starting the "),s("code",[e._v("sh")]),e._v(" interpreter, and giving it the file "),s("code",[e._v("semester")]),e._v(" as the first argument.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" semester\nHTTP/2 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),e._v(" \ncontent-type: text/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("charset")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("utf-8\nserver: GitHub.com\nlast-modified: Thu, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" Feb "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" 04:30:47 GMT\naccess-control-allow-origin: *\netag: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"6024b2f7-1f31"')]),e._v("\nexpires: Fri, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" Feb "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":23:44 GMT\ncache-control: max-age"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("600")]),e._v("\nx-proxy-cache: MISS\nx-github-request-id: A9EE:47A3:AC1A7:B4619:60269B21\naccept-ranges: bytes\ndate: Sat, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" Feb "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(":00:21 GMT\nvia: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" varnish\nage: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nx-served-by: cache-tyo11929-TYO\nx-cache: HIT\nx-cache-hits: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nx-timer: S1613210422.579820,VS0,VE181\nvary: Accept-Encoding\nx-fastly-request-id: 0cd46721fae068c29f4e5cc8b8c4ab71c914d07f\ncontent-length: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7985")]),e._v("\n")])])]),s("p",[e._v("It works because we are not executing the file "),s("code",[e._v("semester")]),e._v("directly. Instead we use the Bash interpreter to execute the file.")]),e._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[s("p",[e._v("Look up the "),s("code",[e._v("chmod")]),e._v(" program using "),s("code",[e._v("man chmod")])])]),e._v(" "),s("li",[s("p",[e._v("Use "),s("code",[e._v("chmod")]),e._v(" to make it possible to run the command "),s("code",[e._v("./semester")]),e._v(" rather than having to type "),s("code",[e._v("sh semester")]),e._v(".")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("che@che-ubuntu:/tmp/missing$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("700")]),e._v(" semester\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("How does shell know that the file is supposed to be interpreted using "),s("code",[e._v("sh")]),e._v("? "),s("a",{attrs:{href:"en.m.wikipedia.org/wiki/Shebang_(Unix)"}},[e._v("shebang")])])]),e._v(" "),s("ol",{attrs:{start:"10"}},[s("li",[e._v("Use "),s("code",[e._v("|")]),e._v(" and "),s("code",[e._v(">")]),e._v(' to write the "last modified" date output by '),s("code",[e._v("semester")]),e._v(" into a file called "),s("code",[e._v("last-modified.txt")]),e._v(" in your home directory.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
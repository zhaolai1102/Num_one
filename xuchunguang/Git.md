# 1、起步
## 安装Git
`sudo apt-get install git`
## 初次运行Git前的配置
**用户信息**  
安装完Git第一件事就是设置你的用户名称与邮箱地址。因为每一次提交都会使用到这些信息。  
` git config --global user.name "姓名"`  
`git config --global user.email xxx@example.com`  
**检查配置信息**
` git config --list`
# 2、基础
## 获取git仓库
**在现有目录中初始化仓库**  
如果打算使用Git来对现有的项目进行古那里，只需今日该项目目录并输入：  
`git init`  
如果你是在一个已经存在文件的文件夹(而不是空文件夹)中初始化Git仓库来进行版本控制的
话，你应该开始跟踪这些文件并提交。你可以通过`git add`命令来实现对制定文件的跟踪，
然后执行`git commit`提交:  
`git add *.c`  
`git add LICENSE`  
`git commit -m 'inital project version'`  
**克隆现有的仓库**    
克隆仓库的命令格式是`git clone [url]`比如，要克隆Git的可链接库`libgit2`，可以使用下列命令    
`git clone http://github.com/libgit2/libgit2`    
如果你想在克隆远程仓库的时候，自定义本地仓库的名字，可以使用如下命令：    
`git clone http://github.com/libgit2/libgit2 mylibgit`    
Git支持多种数据传输协议。`http://`协议，`git://协议`，或者使用SSH传输协议。    
## 记录每次更新到仓库    
现在我们受伤有了一个真是项目Git仓库，并从这个仓库中取出了所有文件的工作拷贝。请记住：你工作目录下的每一个文件都不外乎这两种状态：以跟踪或未跟踪。已跟踪：指那些被纳入了版本控制的文件，在上一次快照中有他们的记录，在工作一段时间后，他们的状态可能处于未修改，已修改或已放入暂存区。初次克隆某个仓库的时候，工作目录中的所有文件都属于已跟踪文件，并处于未修改状态。使用Git时文件的变化周期如下：  
![](/home/xcg/下载/lifecycle.png)
**检查当前文件状态**  
使用命令:  
`git status`  
`位于分支 master`  
`您的分支与上游分支 'origin/master' 一致。`  
`无文件要提交，干净的工作区`  
上面的信息说明你在年在工作目录相当干净,当前目录下没有出现任何处于为跟踪状态的新文件,否则Git会在这里列出来.最后该命令还现实了当前坐在分支,并告诉你这个分支同远程服务器上对应的分支没有偏离。分知名是"master"，这是默认的分支名。现在，创建一个新的`REAME`文件。如果之前不存在这个文件，使用命令，你将看到一个新的未跟踪文件：  
`echo 'My Project' > README`  
`git status`  
**跟踪新文件**  
开始跟踪一个新文件，使用命令：  
`git add README`  
**暂存已修改文件**  
git add 文件  
**状态简览**  
`git status -s` 或`git status --short`  
新添加未跟踪前??,新添加到暂存区前A，修改过未放入缓存的文件前右M，修改过已放入  
缓存左M。  
**忽略文件**  
我们可以创建一个名为`.gitignore	`的文件，列出忽略的文件模式。  
**查看已暂存和未暂存的修改**  
`git diff`将通过文件补丁的格式显示具体哪些行为发生了改变  
`git diff --cached`查看已经暂存起来的变化  
**提交更新**  
`git commit`可加 -m 将提交信息与命令行放在同一行  
**跳过使用暂存区域**  
`git commit -a`  
**移除文件**  
`git rm文件` `git rm -f 文件` `git rm --cached README` `git rm log/\*.log` `git rm \*~`  
强制删除选项-f;从Git仓库中删除,保存在当前目录中;`log/`目录下扩展名为`.log`的所有文件  
**移动文件**  
`git mv README.md README`  
## 查看提交历史  
简单有效的命令`git log`  
默认不用任何参数，会按提交时间列出所有的更新，最近的更新在最上。一个常用的选项 `-p`，用来现实每次提交的内容差异。可以加`-2`来只显示最近两次  
`git log -p -2`  
想看每次提交的简略的统计信息，可以使用`--stat`选项  
**限制输出长度**  
`--since` `--until` `--author` `--grep`  
列出最近两周内的提交：  
`git log --since=2.weeks`  
具体到某一天`2008-01-15`，或者相对多久以前`2 years 1 day 3 minutes ago`  
如果要查看 Git 仓库中，2008 年 10 月期间，`Junio Hamano` 提交的但未合并的测试文件，可以用下面的查询命令：  
`git log --pretty="%h - %s" --author=gitster --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/`  
## 撤销操作  
`git commit --amend`  
取消暂存文件  
`git reset HEAR <file>`  
**撤销对文件的修改**  
`git checkout -- <file>`  
## 远程仓库的使用
**查看远程仓库**  
`git remote https://github.com/schacon/ticgit`  
你也可以指定选项 `-v`，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。  
**添加远程仓库**  
`git remote add <shortname> <url>`例:`git remote add pb   https://github.com/paulboone/ticgit`  
**从远程仓库抓取与拉取**  
`git fetch [remote-name]`  
**推送到远程仓库**  
`git push [remote-name] [branch-name]`  
`git push origin master`克隆时自动设置号的两个名字，且只有当你有所克隆服务器的写入  
权限，并且之前没有人推送过，这条命令才会生效。  
**查看远程仓库**  
`git remote show [remote-name]`例:`git remore show origin`  
**远程仓库的移除和重命名**  
`git remote rename pb paul`  
`git remote rm paul`
## 打标签
**列出标签**  
`git tag`  
`git tag -l 'v1.8.5*'`  
**创建标签**  
`git tag -a v1.4 -m 'my version 1.4'`  
-m 选项指定了一条将会存储在标签中的信息。  
**轻量标签**  
`git tag v1.4 -lw`  
**后期打标签**  
`git log --pretty=oneline`查看提交历史  
`git tag -a v1.2 9fceb02`将没打标签的`9fceb02`打标签  
**共享标签**  
`git push origin v1.5`  
`git push origin --tags`会把所有不再远程仓库服务器上的标签传送到那里  
**删除标签**  
`git checkout 2.0.0`

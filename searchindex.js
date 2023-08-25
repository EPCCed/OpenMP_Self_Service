Search.setIndex({"docnames": ["Exercises/contents", "Part0_Introduction/contents", "Part0_Introduction/template", "Part10_MemoryModel/contents", "Part12_OpenMPImplementation/contents", "Part1_FundamentalConcepts/contents", "Part2_OpenMPFundamentals/contents", "Part3_ParallelRegions/contents", "Part4_Worksharing/contents", "Part5_Synchronisation/contents", "Part6_FurtherTopics/contents", "Part7_Tasks/contents", "Part8_OpenMP4.0-4.5/contents", "Part9_TipsTricksGotchas/contents", "index", "substitutions/substitutions_ARCHER2/ARCHER2_description", "substitutions/substitutions_ARCHER2/ex1_slurm", "substitutions/substitutions_ARCHER2/exercises", "substitutions/substitutions_ARCHER2/ssh_login", "substitutions/substitutions_ARCHER2/view_pgm", "substitutions/substitutions_Cirrus/ssh_login"], "filenames": ["Exercises/contents.md", "Part0_Introduction/contents.md", "Part0_Introduction/template.md", "Part10_MemoryModel/contents.md", "Part12_OpenMPImplementation/contents.md", "Part1_FundamentalConcepts/contents.md", "Part2_OpenMPFundamentals/contents.md", "Part3_ParallelRegions/contents.md", "Part4_Worksharing/contents.md", "Part5_Synchronisation/contents.md", "Part6_FurtherTopics/contents.md", "Part7_Tasks/contents.md", "Part8_OpenMP4.0-4.5/contents.md", "Part9_TipsTricksGotchas/contents.md", "index.md", "substitutions/substitutions_ARCHER2/ARCHER2_description.md", "substitutions/substitutions_ARCHER2/ex1_slurm.md", "substitutions/substitutions_ARCHER2/exercises.md", "substitutions/substitutions_ARCHER2/ssh_login.md", "substitutions/substitutions_ARCHER2/view_pgm.md", "substitutions/substitutions_Cirrus/ssh_login.md"], "titles": ["Exercise materials for ARCHER2", "Shared Memory Programming with OpenMP", "Introduction to Course XYZ", "Memory Model", "OpenMP Implementation", "Fundamental Concepts", "OpenMP Fundamentals", "Parallel Regions", "Worksharing", "Synchronisation", "Further Topics", "Tasks", "OpenMP 4.0 and later feattures", "Tips, Tricks and Gotchas", "Shared Memory Programming with OpenMP", "&lt;no title&gt;", "Using Slurm job scripts", "&lt;no title&gt;", "Connecting to ARCHER2", "&lt;no title&gt;", "Connecting to Cirrus"], "terms": {"note": [0, 16, 17], "sourc": [0, 17], "code": [0, 16, 17, 18], "tar": [0, 17], "file": [0, 16, 18, 19, 20], "aim": [1, 2], "inform": [1, 2, 18], "user": [1, 2, 14, 16, 18], "doe": [1, 2], "have": [1, 2, 14, 16, 18, 19, 20], "coupl": [1, 2], "order": [1, 2], "get": [1, 2, 16], "most": [1, 2, 14], "out": [1, 2, 16], "materi": [1, 2, 14], "A": [1, 2, 14, 19], "b": [1, 2, 14], "sinc": [1, 2], "1990": [1, 2], "ha": [1, 2, 18, 20], "develop": [1, 2, 16], "reput": [1, 2], "lead": [1, 2], "edg": [1, 2], "capabl": [1, 2, 14], "all": [1, 2, 14, 16, 18], "aspect": [1, 2], "high": [1, 2, 18], "perform": [1, 2, 14, 18], "comput": [1, 2, 14, 16, 18, 20], "hpc": [1, 2, 19], "base": [1, 2], "univers": [1, 2], "edinburgh": [1, 2], "we": [1, 2, 14, 16, 19], "work": [1, 2, 14, 16, 18], "industri": [1, 2, 14], "academia": [1, 2], "public": [1, 2, 18, 20], "third": [1, 2], "sector": [1, 2], "organis": [1, 2, 18, 20], "promot": [1, 2], "adopt": [1, 2], "valu": [1, 2], "With": [1, 2], "team": [1, 2], "more": [1, 2, 18], "than": [1, 2], "110": [1, 2], "highli": [1, 2], "qualifi": [1, 2], "specialist": [1, 2], "an": [1, 2, 14, 16], "except": [1, 2], "pool": [1, 2], "talent": [1, 2], "our": [1, 2], "engin": [1, 2], "technic": [1, 2], "staff": [1, 2], "power": [1, 2], "combin": [1, 2], "practic": [1, 2, 14], "theoret": [1, 2], "knowledg": [1, 2], "keep": [1, 2], "forefront": [1, 2], "research": [1, 2], "acceler": [1, 2], "effect": [1, 2], "exploit": [1, 2, 14], "novel": [1, 2], "throughout": [1, 2], "commerc": [1, 2], "been": [1, 2, 18, 20], "mission": [1, 2], "over": [1, 2], "30": [1, 2], "year": [1, 2], "strive": [1, 2], "uk": [1, 2, 18], "": [1, 2, 16], "premier": [1, 2], "supercomput": [1, 2, 14], "centr": [1, 2], "renown": [1, 2], "internation": [1, 2], "innov": [1, 2], "i": [1, 2, 15, 16, 18, 19, 20], "guid": [1, 2, 18], "kei": [1, 2], "goal": [1, 2], "support": [1, 2], "place": [1, 2, 16], "heart": [1, 2], "exascal": [1, 2], "era": [1, 2], "deliv": [1, 2], "world": [1, 2], "class": [1, 2], "servic": [1, 2, 14], "continu": [1, 2], "data": [1, 2, 14], "benefit": [1, 2], "partner": [1, 2], "As": [1, 2], "well": [1, 2], "busi": [1, 2], "advanc": [1, 2], "facil": [1, 2], "driven": [1, 2], "ar": [1, 2, 14, 16, 18], "pivot": [1, 2], "element": [1, 2], "success": [1, 2], "south": [1, 2], "east": [1, 2], "scotland": [1, 2], "citi": [1, 2], "region": [1, 2, 14], "deal": [1, 2], "its": [1, 2, 14], "initi": [1, 2, 18, 20], "collabor": [1, 2], "global": [1, 2, 14], "build": [1, 2, 14], "maintain": [1, 2], "strong": [1, 2], "relationship": [1, 2], "worldwid": [1, 2], "undertak": [1, 2], "import": [1, 2], "teach": [1, 2], "excel": [1, 2], "endeavour": [1, 2], "posit": [1, 2], "major": [1, 2], "provid": [1, 2, 14], "train": [1, 2], "europ": [1, 2], "includ": [1, 2, 14], "substitut": [1, 2], "substitutions_archer2": [1, 2], "archer2_descript": [1, 2], "md": [1, 2], "pdf": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "slide": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "almost": 14, "modern": 14, "now": [14, 18, 20], "architectur": 14, "multipl": 14, "cpu": [14, 16], "connect": 14, "same": 14, "physic": [14, 16], "exampl": [14, 16], "multicor": 14, "laptop": 14, "larg": [14, 16], "multi": 14, "processor": 14, "server": 14, "cover": 14, "standard": [14, 16], "which": [14, 16, 18, 20], "enabl": 14, "serial": 14, "parallelis": 14, "easili": 14, "us": [14, 18, 19, 20], "compil": 14, "direct": 14, "desktop": 14, "machin": [14, 16, 18, 19, 20], "can": [14, 16, 18, 19, 20], "own": 14, "improv": 14, "run": [14, 16, 18, 19], "core": [14, 16], "parallel": [14, 16, 18], "conjunct": 14, "mpi": 14, "better": 14, "node": [14, 16, 18], "contain": [14, 19], "introduct": 14, "fundament": 14, "concept": 14, "variabl": [14, 16], "model": 14, "follow": [14, 18, 20], "syntax": 14, "semant": 14, "how": [14, 18, 20], "real": 14, "The": [14, 16, 18, 20], "topic": 14, "basic": 14, "thread": [14, 16], "task": [14, 16], "privat": 14, "synchronis": 14, "loop": 14, "reduct": 14, "associ": [14, 18, 20], "claus": 14, "workshar": 14, "schedul": [14, 16], "barrier": 14, "critic": 14, "section": 14, "atom": 14, "lock": 14, "addit": [14, 18, 20], "featur": 14, "nest": 14, "orphan": 14, "threadpriv": 14, "4": [14, 16], "0": [14, 16], "5": 14, "trick": 14, "tip": 14, "gotcha": 14, "implement": 14, "self": [14, 19], "seri": 14, "video": 14, "download": [14, 18], "you": [14, 16, 18, 19, 20], "through": 14, "your": [14, 16, 18, 20], "pace": 14, "time": [14, 16], "hand": 14, "option": [14, 16], "either": [14, 18, 20], "fortran": 14, "c": [14, 16], "access": [14, 16, 18, 20], "archer2": [14, 15, 17, 19], "cirru": 14, "particip": 14, "applic": 14, "programm": 14, "want": [14, 18, 20], "learn": 14, "recommend": 14, "confid": 14, "befor": [14, 16, 18], "take": 14, "begin": 14, "would": [14, 18, 20], "grate": 14, "could": 14, "complet": 14, "short": 14, "part": [14, 18, 20], "further": 14, "later": 14, "feattur": 14, "onc": [14, 18, 20], "thi": [15, 16, 18, 19, 20], "placehold": 15, "descript": [15, 19], "mediat": 16, "submiss": 16, "system": [16, 18, 20], "ensur": 16, "fair": 16, "share": 16, "resourc": 16, "make": 16, "sure": 16, "effici": 16, "possibl": 16, "allow": 16, "without": 16, "log": 16, "whilst": 16, "interact": 16, "where": 16, "directli": 16, "execut": 16, "thei": 16, "debug": 16, "ideal": 16, "long": 16, "number": 16, "product": 16, "need": [16, 18, 20], "them": 16, "solut": 16, "method": 16, "gener": 16, "like": 16, "mode": 16, "In": [16, 18, 20], "case": 16, "put": 16, "command": [16, 19], "wish": 16, "call": 16, "sequenc": 16, "notic": 16, "omp": 16, "folder": 16, "If": [16, 18, 20], "open": 16, "text": 16, "editor": 16, "nano": 16, "vi": 16, "emac": 16, "bin": 16, "bash": 16, "sbatch": 16, "name": [16, 18, 20], "sharpen": 16, "1": 16, "per": 16, "00": 16, "01": 16, "replac": 16, "budget": 16, "below": 16, "project": [16, 18, 20], "e": [16, 18], "g": [16, 18], "t01": 16, "account": 16, "partit": 16, "qo": 16, "setup": 16, "environ": [16, 19], "modul": [16, 19], "load": [16, 19], "epcc": 16, "env": 16, "set": [16, 19], "export": 16, "omp_num_thread": 16, "slurm_cpus_per_task": 16, "launch": 16, "srun": 16, "hint": 16, "nomultithread": 16, "distribut": 16, "block": 16, "openmp": 16, "program": 16, "so": [16, 18, 20], "control": [16, 19], "To": [16, 19], "submit": 16, "1793266": 16, "uniqu": [16, 18, 20], "id": 16, "On": [16, 18, 20], "must": [16, 18, 20], "from": [16, 18, 20], "filesystem": [16, 18], "squeue": 16, "show": [16, 18, 20], "statu": [16, 18, 20], "ani": [16, 18], "argument": 16, "list": 16, "known": 16, "just": 16, "add": [16, 18, 20], "u": 16, "veri": 16, "quickli": 16, "mai": 16, "see": 16, "queue": 16, "finish": 16, "jobid": 16, "view": [16, 19], "cat": 16, "imag": [16, 19], "input": 16, "fuzzi": 16, "pgm": [16, 19], "size": 16, "564": 16, "x": 16, "770": 16, "filter": 16, "17": 16, "read": 16, "done": [16, 18, 20], "start": 16, "calcul": 16, "2": 16, "3": 16, "write": 16, "wa": 16, "970780": 16, "second": 16, "overal": 16, "124198": 16, "edit": 16, "differ": 16, "resubmit": 16, "becaus": 16, "scale": 16, "beyond": 16, "one": [16, 18, 20], "128": 16, "exercis": 17, "doc": [17, 18], "tp": 17, "login": [18, 20], "go": [18, 20], "menu": [18, 20], "select": [18, 20], "request": [18, 20], "choos": [18, 20], "todo": [18, 20], "box": [18, 20], "click": [18, 20], "next": [18, 20], "page": [18, 20], "should": [18, 20], "enter": [18, 20], "usernam": [18, 20], "prefer": [18, 20], "everi": [18, 20], "chosen": [18, 20], "taken": [18, 20], "anoth": [18, 20], "wait": [18, 20], "cours": [18, 20], "accept": [18, 20], "regist": [18, 20], "when": [18, 20], "happen": [18, 20], "creat": [18, 20], "sent": [18, 20], "email": [18, 20], "receiv": [18, 20], "believ": [18, 20], "activ": [18, 20], "check": [18, 20], "also": [18, 20], "pick": [18, 20], "shot": [18, 20], "password": [18, 20], "There": [18, 20], "guidanc": [18, 20], "document": [18, 20], "subsequ": [18, 20], "detail": [18, 20], "credenti": [18, 20], "button": [18, 20], "type": [18, 20], "copi": [18, 20], "past": [18, 20], "ad": [18, 20], "abl": [18, 20], "instruct": [18, 20], "ac": 18, "move": 18, "cd": 18, "group": 18, "both": 18, "frontend": 18, "job": 18, "cannot": 18, "home": 18, "attempt": 18, "fail": 18, "error": 18, "For": 18, "http": 18, "io": 18, "imagemagick": 19, "displai": 19, "here": 19, "introduc": 19, "wai": 19, "softwar": 19, "typic": 19, "packag": 19, "requir": 19, "usual": 19, "encod": 19, "depend": 19, "other": 19}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"exercis": [0, 14], "materi": 0, "archer2": [0, 1, 2, 16, 18], "cirru": [0, 20], "share": [1, 14], "memori": [1, 3, 14], "program": [1, 14], "openmp": [1, 4, 6, 12, 14], "prerequisit": [1, 2], "object": [1, 2], "thi": [1, 2, 14], "cours": [1, 2, 14], "about": [1, 2, 14], "epcc": [1, 2], "introduct": 2, "xyz": 2, "model": 3, "part": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "A": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "implement": 4, "b": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "fundament": [5, 6], "concept": 5, "c": [5, 8, 12], "parallel": 7, "region": 7, "workshar": 8, "synchronis": 9, "further": 10, "topic": 10, "task": 11, "4": 12, "0": 12, "later": 12, "feattur": 12, "tip": 13, "trick": 13, "gotcha": 13, "who": 14, "i": 14, "pre": 14, "questionnair": 14, "lectur": 14, "post": 14, "us": 16, "slurm": 16, "job": 16, "script": 16, "monitor": 16, "batch": 16, "find": 16, "output": 16, "connect": [18, 20], "sign": [18, 20], "up": [18, 20], "an": [18, 20], "account": [18, 20], "through": [18, 20], "safe": [18, 20], "gener": [18, 20], "ssh": [18, 20], "kei": [18, 20], "pair": [18, 20], "upload": [18, 20], "log": [18, 20]}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Exercise materials for ARCHER2": [[0, "exercise-materials-for-archer2"]], "Exercise materials for Cirrus": [[0, "exercise-materials-for-cirrus"]], "Shared Memory Programming with OpenMP": [[1, "shared-memory-programming-with-openmp"], [14, "shared-memory-programming-with-openmp"]], "Prerequisites": [[1, "prerequisites-0"], [2, "prerequisites-0"]], "Objectives of this course": [[1, "objectives-of-this-course"], [2, "objectives-of-this-course"]], "About EPCC": [[1, "about-epcc"], [2, "about-epcc"]], "About ARCHER2": [[1, "about-archer2"], [2, "about-archer2"]], "Introduction to Course XYZ": [[2, "introduction-to-course-xyz"]], "Memory Model": [[3, "memory-model"]], "Part A": [[3, "part-a"], [4, "part-a"], [5, "part-a"], [6, "part-a"], [7, "part-a"], [8, "part-a"], [9, "part-a"], [10, "part-a"], [11, "part-a"], [12, "part-a"], [13, "part-a"]], "OpenMP Implementation": [[4, "openmp-implementation"]], "Part B": [[4, "part-b"], [5, "part-b"], [6, "part-b"], [7, "part-b"], [8, "part-b"], [9, "part-b"], [10, "part-b"], [11, "part-b"], [12, "part-b"], [13, "part-b"]], "Fundamental Concepts": [[5, "fundamental-concepts"]], "Part C": [[5, "part-c"], [8, "part-c"], [12, "part-c"]], "OpenMP Fundamentals": [[6, "openmp-fundamentals"]], "Parallel Regions": [[7, "parallel-regions"]], "Worksharing": [[8, "worksharing"]], "Synchronisation": [[9, "synchronisation"]], "Further Topics": [[10, "further-topics"]], "Tasks": [[11, "tasks"]], "OpenMP 4.0 and later feattures": [[12, "openmp-4-0-and-later-feattures"]], "Tips, Tricks and Gotchas": [[13, "tips-tricks-and-gotchas"]], "About this course": [[14, "about-this-course"]], "Who is the course for?": [[14, "who-is-the-course-for"]], "Pre-course questionnaire": [[14, "pre-course-questionnaire"]], "Lectures": [[14, "lectures"]], "Exercises": [[14, "exercises"]], "Post-course questionnaire": [[14, "post-course-questionnaire"]], "Using Slurm job scripts": [[16, "using-slurm-job-scripts"]], "archer2.slurm:": [[16, "archer2-slurm"]], "Monitoring the batch job": [[16, "monitoring-the-batch-job"]], "Finding the output": [[16, "finding-the-output"]], "Connecting to ARCHER2": [[18, "connecting-to-archer2"]], "Sign up for an account on ARCHER2 through SAFE": [[18, "sign-up-for-an-account-on-archer2-through-safe"]], "Generate an SSH key pair and upload it to SAFE": [[18, "generate-an-ssh-key-pair-and-upload-it-to-safe"], [20, "generate-an-ssh-key-pair-and-upload-it-to-safe"]], "Log into ARCHER2": [[18, "log-into-archer2"]], "Connecting to Cirrus": [[20, "connecting-to-cirrus"]], "Sign up for an account on Cirrus through SAFE": [[20, "sign-up-for-an-account-on-cirrus-through-safe"]], "Log into Cirrus": [[20, "log-into-cirrus"]]}, "indexentries": {}})
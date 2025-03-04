import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Code2, Play, Save, Settings, Share2, FileCode, Moon, Sun, Download, Upload, RefreshCw } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(`// Welcome to CodeCraft IDE
// Start typing your code here

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Developer'));
`);
  const [fileName, setFileName] = useState('script.js');
  const [output, setOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleEditorChange = (value) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'vs-dark' : 'light');
  };

  const runCode = () => {
    setShowOutput(true);
    try {
      // For JavaScript, we can use Function constructor to evaluate the code
      // This is a simplified approach - in a real app you'd want more security
      const consoleOutput = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleOutput.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : arg
        ).join(' '));
      };
      
      new Function(code)();
      
      console.log = originalConsoleLog;
      setOutput(consoleOutput.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const formatCode = () => {
    // In a real app, you would integrate with a formatter like Prettier
    // This is a placeholder for the functionality
    alert('Code formatting would be applied here');
  };

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'json', label: 'JSON' },
    { value: 'python', label: 'Python' },
  ];

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    
    // Update file extension based on language
    const extensions = {
      javascript: 'js',
      typescript: 'ts',
      html: 'html',
      css: 'css',
      json: 'json',
      python: 'py'
    };
    
    const baseName = fileName.split('.')[0];
    setFileName(`${baseName}.${extensions[newLang]}`);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      {/* Header */}
      <header className={`px-6 py-4 ${theme === 'light' ? 'bg-white border-b border-gray-200' : 'bg-gray-800 border-b border-gray-700'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className={`h-6 w-6 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} />
            <h1 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>CodeCraft IDE</h1>
          </div>
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className={`px-3 py-1 text-sm rounded-md border ${theme === 'light' ? 'bg-white border-gray-300 text-gray-700' : 'bg-gray-700 border-gray-600 text-white'}`}
            />
            <button 
              className={`p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-300" />}
            </button>
            <button 
              className={`p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}`}
              aria-label="Settings"
            >
              <Settings className={`h-5 w-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`} />
            </button>
            <button 
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${theme === 'light' ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white'}`}
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className={`w-full md:w-64 p-4 ${theme === 'light' ? 'bg-white border-r border-gray-200' : 'bg-gray-800 border-r border-gray-700'}`}>
          <div className="mb-6">
            <h2 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>LANGUAGE</h2>
            <select 
              value={language}
              onChange={handleLanguageChange}
              className={`w-full p-2 rounded-md border ${theme === 'light' ? 'bg-white border-gray-300 text-gray-700' : 'bg-gray-700 border-gray-600 text-white'}`}
            >
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <h2 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>ACTIONS</h2>
            <div className="space-y-2">
              <button 
                onClick={runCode}
                className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}
              >
                <Play className="h-4 w-4" />
                <span>Run Code</span>
              </button>
              <button className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}>
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}>
                <FileCode className="h-4 w-4" />
                <span>New File</span>
              </button>
              <button className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}>
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
              <button className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}>
                <Upload className="h-4 w-4" />
                <span>Upload</span>
              </button>
              <button 
                onClick={formatCode}
                className={`w-full flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-gray-700 text-gray-200'}`}
              >
                <RefreshCw className="h-4 w-4" />
                <span>Format Code</span>
              </button>
            </div>
          </div>
          
          <div>
            <h2 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>FILES</h2>
            <div className={`p-2 rounded-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
              <div className={`flex items-center space-x-2 p-2 rounded-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} border ${theme === 'light' ? 'border-gray-200' : 'border-gray-600'}`}>
                <FileCode className={`h-4 w-4 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`} />
                <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-200'}>{fileName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editor and Output */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <Editor
              height="100%"
              language={language}
              value={code}
              theme={theme}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: true },
                fontSize: 14,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: 'on',
              }}
            />
          </div>
          
          {showOutput && (
            <div className={`h-32 p-4 overflow-auto border-t ${theme === 'light' ? 'bg-gray-100 border-gray-200 text-gray-800' : 'bg-gray-800 border-gray-700 text-gray-200'}`}>
              <h3 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>CONSOLE OUTPUT</h3>
              <pre className="font-mono text-sm whitespace-pre-wrap">{output}</pre>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className={`px-6 py-3 ${theme === 'light' ? 'bg-white border-t border-gray-200 text-gray-600' : 'bg-gray-800 border-t border-gray-700 text-gray-400'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">CodeCraft IDE © 2025</div>
          <div className="text-sm">Ready</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
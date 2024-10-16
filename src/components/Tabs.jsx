export function Tabs(props) {
  const { todos, setCurrentTab, currentTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className='tab-container'>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All" ? todos.length :
          tab === "Open" ? todos.filter((val) => !val.complete).length :
          tab === "Completed" ? todos.filter((val) => val.complete).length : "x";
        return (
          <button key={tabIndex} className={'tab-button' + (tab === currentTab ? ' tab-selected' : '')}
            onClick={() => {
              setCurrentTab(tab)
            }}>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}

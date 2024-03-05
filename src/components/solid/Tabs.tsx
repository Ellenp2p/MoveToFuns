import { createSignal, type Component } from "solid-js";
interface tabsItem {
  name: string;
  content: string;
}

export const Tabs: Component<{ tabs: tabsItem[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = createSignal<number>(0);

  function handleClick(index: number): void {
    console.log(index);
    setActiveTab(index);
  }

  return (
    <>
      <div class="border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <li onClick={() => handleClick(index)} class={`me-2 `}>
              <a
                class={`inline-block p-4 border-b-2  rounded-t-lg   ${index === activeTab() ? "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-30"}`}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>

        <div class="tab-content">
          {tabs.map((tab, index) => (
            <div class={`${index === activeTab() ? "block" : "hidden"}`}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

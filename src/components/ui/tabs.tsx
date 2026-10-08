import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

/*
  shadcn's tabs, cut down to Base UI's parts with no styling of their own. shadcn's version is a grey
  pill switcher, which the site's tabs ("Site/Feature Tab") look nothing like, so they're styled where
  they're used. Base UI marks the open tab with data-active (style it with data-active:…)
*/
function Tabs(props: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />
}

function TabsList(props: TabsPrimitive.List.Props) {
  return <TabsPrimitive.List data-slot="tabs-list" {...props} />
}

function TabsTrigger(props: TabsPrimitive.Tab.Props) {
  return <TabsPrimitive.Tab data-slot="tabs-trigger" {...props} />
}

function TabsContent(props: TabsPrimitive.Panel.Props) {
  return <TabsPrimitive.Panel data-slot="tabs-content" {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

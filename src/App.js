export default function App() {
  return (
<div class="flex space-y-44 h-screen items-center
 justify-start pl-36 bg-gray-700">
<div class="flex justify-center">
<span class="animate-loader  w-4 h-4 my-12 mx-1
 bg-blue-500 rounded-full"/>
 <span class="animate-loader  w-4 h-4 my-12 mx-1
 bg-red-500 rounded-full animation-delay-200"/>
 <span class="animate-loader  w-4 h-4 my-12 mx-1
 bg-green-500 rounded-full animation-delay-400"/>
</div>
</div>
  );
}

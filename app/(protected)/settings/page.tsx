import { auth, signOut } from '@/auth'

const SettingsPage = async () => {
  /* 
  因为auth.ts中定义的callback返回的session会放入全局的「import { auth } from '@/auth'」中
  所以这里可以直接使用auth()来获取session信息
  */
  const session = await auth()

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server'

          await signOut()
        }}
      >
        <button
          type="submit"
          className="border-blue-500 border rounded-md bg-blue-400 text-white px-3"
        >
          Sign out
        </button>
      </form>
    </div>
  )
}

export default SettingsPage

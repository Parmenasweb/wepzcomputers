export default function BusinessHours() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Business Hours
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-gray-600">Monday - Friday:</span>
              <span className="font-semibold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Saturday:</span>
              <span className="font-semibold">10:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">Sunday:</span>
              <span className="font-semibold">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
